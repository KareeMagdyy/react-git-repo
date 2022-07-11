import styled from "styled-components";
import { GiRoundStar } from "react-icons/gi";
import { BiLinkExternal } from "react-icons/bi";

const ReposInfo = (props) => {
  const repos =
    props.data.length > 0 ? (
      props.data.map((repo) => (
        <div className='repo-container' key={repo.id}>
          <div className='main-info'>
            <h4>{repo.name}</h4>
            <p>
              Created at:{" "}
              {new Date(repo.created_at).toLocaleDateString("en-GB")}
            </p>
          </div>
          <div className='link-stars'>
            <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
              <BiLinkExternal size='1.2rem' />
            </a>
            <GiRoundStar color='#E3B341' size='1.2rem' />
            <span>{repo.stargazers_count}</span>
          </div>
        </div>
      ))
    ) : (
      <h3>No data to show</h3>
    );
  return <ReposData>{repos}</ReposData>;
};

export default ReposInfo;

const ReposData = styled.section`
  padding: 1.25rem;
  background-color: #e0e0e0;
  border-radius: 0.3rem;
  .main-info {
    h4 {
      margin: 0.75rem 0 0 0;
    }
    p {
      margin: 0.5rem 0 0.75rem 0;
      font-size: 0.85rem;
    }
  }

  .repo-container {
    background-color: #fff;
    padding: 0.5rem;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }

    .link-stars {
      display: flex;
      align-items: center;
      justify-content: center;
      /* gap: 0.5rem; */

      a {
        color: #000;
        margin-right: 10px;

        svg {
          margin-top: 5px;
        }
      }

      span {
        font-size: 0.9rem;
        font-weight: 700;
        margin-left: 3px;
      }
    }
  }
`;
