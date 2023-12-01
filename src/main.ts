import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `

<h1>Toggle Switch</h1>

<label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>

<p>on</p>
<p>off</p>

`