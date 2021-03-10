interface RepositoryItemProps  {
  repository: {
    name: string;
    description: string;
    html_url: string;
    owner: {
      avatar_url: string;
    }
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return(
    <li>
    <strong>{props.repository.name}</strong>
    <p>{props.repository.description}</p>
    <a href={props.repository.html_url}>
      Acessar repositório
    </a><br /><br />
    <img src={props.repository.owner.avatar_url} alt="" />
  </li>
  )
}