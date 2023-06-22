import RootLayout from "@/layouts/RootLayout";
import { store } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
<<<<<<< HEAD
=======
    <>
<<<<<<< HEAD
      <Provider store={store}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </Provider>
    </> 
=======
>>>>>>> a3513b7 (add state to hospital list)
    <Provider store={store}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
<<<<<<< HEAD
    </Provider>
=======
      </Provider>
    </>
>>>>>>> 7840c25 (add state to hospital list)
>>>>>>> a3513b7 (add state to hospital list)
  );
}
