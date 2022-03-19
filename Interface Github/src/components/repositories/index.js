import React, { useEffect, useState } from "react";
import RepositoryItem from "../repository-item";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchRepos, sethasUserForSearchRepos] = useState(false);

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    sethasUserForSearchRepos(githubState.repositories);
  }, [githubState.user.login]);

  return (
    <>
      {hasUserForSearchRepos ? (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            {githubState.repositories.map((item) => (
              <RepositoryItem
                key={item.id}
                name={item.name}
                linkToRepo={item.full_name}
                fullName={item.full_name}
              />
            ))}
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            {githubState.starred.map((item) => (
              <RepositoryItem
                key={item.id}
                name={item.name}
                linkToRepo={item.full_name}
                fullName={item.full_name}
              />
            ))}
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
};

export default Repositories;
