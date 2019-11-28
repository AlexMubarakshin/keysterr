import App from 'next/app';

export default class MyApp extends App {
  componentDidMount() {
    const styleNode = document.getElementById('server-side-styles');

    if (styleNode && styleNode.parentNode) {
      styleNode.parentNode.removeChild(styleNode);
    }
  }
}