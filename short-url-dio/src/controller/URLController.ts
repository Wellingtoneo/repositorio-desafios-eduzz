import {Request, Response} from 'express';
import shortId from 'shortid';
import { config } from '../config/Constants';
import { URLModel } from '../database/model/URL';

export class URLController {
    public async shorten(req: Request, res: Response): Promise<void>{
        const { originURL } = req.body;
        const url = await URLModel.findOne({ originURL });
        if(url){    
            res.status(200).json({ url });
        }   
        
        const hash = shortId.generate();
        const shorURL = `${config.API_URL}/${hash}`;
        const newURL = await URLModel.create({ originURL, hash, shorURL });
        res.json(newURL);
    }

    public async redirect(req: Request, res: Response): Promise<void>{
        const { hash } = req.params;
        const url = await URLModel.findOne({ hash });
        if(url){
            res.redirect(url.originURL);
            return
        }
        res.status(404).json({ message: 'URL not found' });
    }
}