import * as React from "react"
import Helmet from "react-helmet"
import Splash from "../images/splash.png"
import Logo from "../images/logo.svg"

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Deploy with Cloud 66 Prepress</title>
      </Helmet>
      <article>
        <div class="mx-auto">
          <div class="relative overflow-hidden">
            <div class="absolute inset-0">
              <img class="h-full w-full object-cover" src={Splash} alt="Salute" />
              <div class="absolute inset-0 bg-yellow-700 mix-blend-multiply"></div>
            </div>
            <div class="relative h-screen">
              <div>
                <a href="https://cloud66.com">
                  <img class="absolute inset-0 h-8 w-8 mt-4 ml-4" src={Logo} alt="Cloud 66 Prepress" />
                </a>
              </div>
              <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl pt-24">
                <span class="block text-white">Hello,</span>
                <span class="block text-yellow-200">it's good to see you here!</span>
              </h1>
              <p class="mt-6 max-w-lg mx-auto text-center text-xl text-orange-200 sm:max-w-3xl">
                We're excited to see you trying out Cloud 66 Prepress, the best way to deploy your static sites on any cloud.
              </p>
              <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div class="space-y-4 sm:space-y-0 sm:mx-auto">
                  <a href="https://www.cloud66.com/frameworks/static-sites" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-orange-700 bg-white hover:bg-orange-50 sm:px-8"> Find out more </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}

export default IndexPage
