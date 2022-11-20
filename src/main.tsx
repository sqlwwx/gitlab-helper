import { render } from 'preact';
import { App } from './app';
import { useState, useEffect } from 'preact/hooks';
import { BaseLocationHook, Path, Router } from "wouter-preact";
import './index.css';

const currentLocation = () => {
  return window.location.hash.replace(/^#/, "") || "/";
};

const navigate = (path: Path) => (window.location.hash = path);

function useHashLocation(){
  const [path, setPath] = useState<Path>(currentLocation());

  useEffect(() => {
    const handler = () => setPath(currentLocation());
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  return [
    path,
    navigate
  ];
};

render(
  // @ts-ignore
  (<Router hook={useHashLocation}> 
    <App />
  </Router>),
  (() => {
    const app = document.createElement('div');
    document.querySelector('#content-body')?.append(app)
    return app;
  })(),
);
