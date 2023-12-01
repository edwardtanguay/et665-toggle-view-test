import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

<h1>Toggle Switch</h1>

<label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>


`