import './Article.light.css'
import './Article.dark.css'
import img from '../assets/images/listBackground.webp'

const Top = (props) => {
  return (
    <div
      class="md:mt--20 mt-0 h-20 bg-blue  bg-cover bg-center"
      style={{
        'background-image': `url(${img})`
      }}
    >
      <div class="flex items-center justify-start px-3 w-full box-border h-full bg-black bg-op-40">
        <div
          class="cursor-pointer"
          onClick={() => {
            // If has history, go back
            if (props.history.length > 1) {
              window.history.go(-1)
            } else {
              // Otherwise, go to news page
              window.location.href = '/news'
            }
          }}
        >
          <svg
            class="w-12 h-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48.873 48.912"
          >
            <path
              id="icon"
              d="M106.763,80.838A24.456,24.456,0,1,0,131.2,105.294,24.446,24.446,0,0,0,106.763,80.838Zm5.314,35.017a1.392,1.392,0,0,1,.132,1.96,1.41,1.41,0,0,1-1.972-.131L98.873,106.447a1.649,1.649,0,0,1,0-2.3L110.238,92.9a1.409,1.409,0,0,1,1.972-.131,1.392,1.392,0,0,1-.132,1.96l-10.685,10.561Z"
              transform="translate(-82.327 -80.838)"
              fill="#fff"
            />
          </svg>
        </div>
        <h1 class="ml-5 color-white font-sans text-6">{props.title}</h1>
      </div>
    </div>
  )
}

export default (props) => {
  return (
    <div class="overflow-hidden">
      <Top title={props.data.title.rendered} />

      <div class="!m-10 article transition-all">
        <h1 class="md:display-block display-none">
          {props.data.title.rendered}
        </h1>
        <article
          // eslint-disable-next-line solid/no-innerhtml
          innerHTML={props.data.content.rendered}
        />
      </div>
    </div>
  )
}
