import { AppProps } from "next/app";
import "../styles/global.css";
import {config, library} from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
library.add(fab, fas);

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}