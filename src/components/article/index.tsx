interface IProps {
  content: string,
  className: string
}

export const Article = ( { content, className }: IProps ) => {
  
  return (
    <article 
      className={className} 
      dangerouslySetInnerHTML={{'__html': content}}
    />
  )
}