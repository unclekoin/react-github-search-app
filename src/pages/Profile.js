import React, {useContext, useEffect, Fragment} from "react";
import {GithubContext} from "../context/github/githubContext";
import {Link} from "react-router-dom";
import {Repos} from "../components/Repos";

export const Profile = ({match}) => {
  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext);
  const urlName = match.params.name;

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <p className="text-center">Loading...</p>
  }

  const {
    name, company, avatar_url, location, bio,
    blog, login, html_url, followers,
    public_repos, public_gists, following
  } = user;

  return (
    <Fragment>
      <Link className="btn btn-link" to="/">Home page</Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img src={avatar_url} alt={name} style={{width: 150}} />
              <h1>{name}</h1>
              {location && <p>Location: {location}</p>}
            </div>
            <div className="col">
              {
                bio && <Fragment>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </Fragment>
              }
              <a className="btn btn-dark mb-3" href={html_url} target="_blank" rel="noreferrer" >Open profile</a>
              <ul>
                {login && <li>
                  <strong>Username: </strong>{login}
                </li>}
                {company && <li>
                  <strong>Company: </strong>{company}
                </li>}
                {blog && <li>
                  <strong>Website: </strong><a href={blog} rel="noreferrer" target="_blank">{blog}</a>
                </li>}
              </ul>
              <div className="badge bg-primary me-1">Followers: {followers}</div>
              <div className="badge bg-success me-1">Following: {following}</div>
              <div className="badge bg-info me-1">Repos: {public_repos}</div>
              <div className="badge bg-dark">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
     <Repos repos={repos} />
    </Fragment>
  )
}
