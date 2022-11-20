import { useRef, useEffect } from 'preact/hooks';
import { Route, useLocation } from "wouter-preact";
import { ChangelogDashboard } from './ChangelogDashboard';
import './app.css';

const init = () => {
  // add menu
  const changeLogsMenu = document.createElement('li')
  changeLogsMenu.innerHTML = `<a href="#/changelogs">Changelogs</a>`
  document.querySelector('li[data-track-label="repository_analytics"]')?.parentElement?.append(changeLogsMenu)
}

init()

export function App() {
  const [location] = useLocation()
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!['/changelogs'].includes(location)) {
      return
    }
    const element = ref.current?.parentElement as HTMLElement
    if (!element) {
      return
    }
    (Array.from(element.parentElement?.children || []) as Array<HTMLElement>).forEach((el: HTMLElement) => {
      el.style.display = 'none'
    })
    element.style.display = 'block'
  }, [location])
  return (
    <div ref={ref}>
      <Route path="/changelogs"><ChangelogDashboard /></Route>
    </div>
  );
}
