import { useParams } from 'react-router-dom';
import '../Styles/Project.css';


import game2image from '../Images/projectsImages/dont let it grow.png';
import game3image from "../Images/projectsImages/addictive loop.png";
import game4image from "../Images/projectsImages/zombie attack.png";


import logo from '../Images/Logos/logowhitebg.png';


import pdficon from '../Images/ImagesCategories/pdf.png';

import story1 from '../PDF/story1.pdf';
import story2 from '../PDF/story2.pdf';
import story3 from '../PDF/story3.pdf';

const Project = () => {
    const { id } = useParams();

    let project = {};

    switch (id) {

        case 'game1':
          project = {
            id: id,
            title: 'Escape The Humans',
            trailerId: '5qzjf4Gmssk',
            storeLinks: [
              { name: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.ScorpionCobraStudio.EscapeTheHumans' },
              { name: 'Itch.io', url: 'https://dom678.itch.io/escape-the-humans'},
              { name: 'Steam', url: 'https://store.steampowered.com/app/3899970/Escape_The_Humans/' }
            ],
          };
          break;

        case 'game2':
          project = {
            id: id,
            title: 'Dont Let It Grow',
            image: game2image,
            storeLinks: [
              { name: 'Itch.io', url: 'https://dom678.itch.io/dont-let-it-grow' }
            ],
          };
          break;

            case 'game3':
          project = {
            id: id,
            title: 'Addictive Loop',
            image: game3image,
            storeLinks: [
              { name: 'Itch.io', url: 'https://dom678.itch.io/addictive-loop' }
            ],
          };
          break;

            case 'game4':
          project = {
            id: id,
            title: 'Zombie Attack',
            image: game4image,
            storeLinks: [
              { name: 'Itch.io', url: 'https://dom678.itch.io/zombie-attack' },
              {name: 'Unity Play', url: 'https://play.unity.com/en/games/2f450ec6-2f0b-4891-ae08-3ff99ec76eee/zombie-attack'}
            ],
          };
          break;

          case 'web1':
            project = {
              id: id,
              title: 'Scorpion Cobra Studio',
              image: logo,
            };
            break;

            case 'literature1':
              project = {
                id: id,
                title: 'The World Needs of Failures',
                image: pdficon,
                pdf: story1,
              };
              break;

               case 'literature2':
              project = {
                id: id,
                title: 'The Seven Deadly Sins',
                image: pdficon,
                pdf: story2,
              };
              break;

                case 'literature3':
              project = {
                id: id,
                title: 'Piggy Boy',
                image: pdficon,
                pdf: story3,
              };
              break;

        default:
        return <h2>Project not found</h2>;
    }

   

    return (
      <div className="project-page">
          <div className="project-container">
              <h1>{project.title}</h1>

              {/* Video or Image */}
              <div className="video-or-image-container">
                  {project.trailerId ? (
                      <iframe
                          id="project-trailer"
                          title={`${project.title} Trailer`}
                          width="560"
                          height="315"
                          src={`https://www.youtube.com/embed/${project.trailerId}`}
                          allowFullScreen
                      ></iframe>
                  ) : (
                      project.image && (
                          <img
                              src={project.image}
                              alt={project.title}
                              className="project-image"
                          />
                      )
                  )}
              </div>

              {/* Store Links */}
              {project.storeLinks && project.storeLinks.length > 0 && (
                  <div className="store-links">
                      {project.storeLinks.map((store, index) => (
                          <a
                              key={index}
                              href={store.url}
                              className="store-link"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              {store.name}
                          </a>
                      ))}
                  </div>
              )}

              {/* PDF Download Link */}
              {project.pdf && (
                  <div>
                      <a
                          href={project.pdf}
                          download={`download-${project.title}`}
                      >
                          Download PDF
                      </a>
                  </div>
              )}
          </div>
      </div>
  );
};

export default Project;
