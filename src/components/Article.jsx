import './Article.light.css'

export default (props) => {
  return (
    <div class="m-10">
      <article
        class="article"
        // eslint-disable-next-line solid/no-innerhtml
        innerHTML={
          `<h1>${props.data.title.rendered}</h1>` + props.data.content.rendered
        }
      />
    </div>
  )
}
