import style from './Article.module.css'

export default (props) => {
  return (
    <div class="m-10">
      <h1>{props.data.title.rendered}</h1>
      <article class={style.article} innerHTML={props.data.content.rendered} />
    </div>
  )
}
