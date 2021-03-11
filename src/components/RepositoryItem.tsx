import { AiOutlineCoffee } from "react-icons/ai";
import '../styles/card.scss';
interface RepositoryItemProps  {
  repository: {
    name: string;
    description: string;
    html_url: string;
    owner: {
      avatar_url: string;
      login: string;
    }
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return(

    
    <li>
    <div className="center">
    <div className="card">
      <div className="additional">
        <div className="user-card">
          <img src={props.repository.owner.avatar_url} alt="" />
        </div>
        <div className="more-info">
          <h1>{props.repository.owner.login}</h1>
          <div className="coords">
            <span>{props.repository.description}</span>
          </div>
        
          <div className="stats">
            <div>
              <div className="title">Total de Café Consumido</div>
              <AiOutlineCoffee />
            </div>
          </div>
        </div>
      </div>
      <div className="general">
        <h1>{props.repository.owner.login}</h1>
        <p>{props.repository.name}</p>
        <span className="more">Passe o Mouse para mais Informações</span>
      </div>
    </div>
  
    
  
  </div>




  </li>
  )
}