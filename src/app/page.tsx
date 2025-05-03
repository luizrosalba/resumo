import Topics from "./components/Home/Topics/Topics";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Topics 
          title="AZ-900"
          urls={["https://github.com/luizrosalba/az9000","https://github.com/luizrosalba/AZ-900T0x-MicrosoftAzureFundamentals"]}
        />
        <Topics 
          title="Azure Functions"
          urls={["https://github.com/luizrosalba/Azure_Functions"]}
        />

        ## 
        
        ## Clean Code

        https://github.com/luizrosalba/clean-code-javascript
        https://github.com/luizrosalba/clean-code-javascript-1

        ## CSS

        https://github.com/luizrosalba/cssexamples
        https://github.com/luizrosalba/30DiasDeCSS
        ## NVM

        https://github.com/luizrosalba/resumo/blob/master/npm.md

        ## Git

        https://github.com/luizrosalba/resumo/blob/master/git.md
        https://github.com/luizrosalba/aprendendo_git

        ## Design Patterns

        https://github.com/luizrosalba/Design-Patters

        ## DevSecOps Github

        https://github.com/luizrosalba/devsecops-github

        ## Enzyme

        https://github.com/luizrosalba/udemy-ENZYME


        ## Html

        https://github.com/luizrosalba/resumo/blob/master/HTML.md

        ## HTML5

        ## Bootstrap

        https://www.w3schools.com/bootstrap4/default.asp

        ## Java

        https://github.com/luizrosalba/java

        ## Javascript

        https://github.com/luizrosalba/resumo/blob/master/javascript.md
        https://github.com/luizrosalba/asynchronous-javascript-tutorial
        https://github.com/luizrosalba/33-js-concepts
        https://github.com/luizrosalba/asyncawait


        ## JWT

        https://github.com/luizrosalba/node-jwt


        ## React-Redux

        https://github.com/luizrosalba/react-redux-simple-counter
        ## RTL

        https://github.com/luizrosalba/udemy-TESTING-LIBRARY
        https://github.com/luizrosalba/jest-react-testing-library-react

        ## Solid

        https://github.com/luizrosalba/resumosolid


        ## Typescript

        https://github.com/luizrosalba/typescript-understainding-ts-course
        https://github.com/luizrosalba/resumo/blob/master/typescript.md
        https://github.com/luizrosalba/TSTestCourse
        https://github.com/luizrosalba/typescript-handbook
        https://github.com/luizrosalba/ts-bootstrap-templates
        https://github.com/luizrosalba/typescript_intro

        ## Webpack

        https://github.com/luizrosalba/webpack-tutorial

        ## Regular Expressions

        https://github.com/luizrosalba/resumo/blob/master/regex.md

        ## ES6

        https://github.com/luizrosalba/resumo/blob/master/ecma6.md
        https://github.com/luizrosalba/resumo/blob/master/error-handling.md
        https://github.com/luizrosalba/resumo/blob/master/TDD-BDD.md

        ## SC-900

        https://github.com/luizrosalba/sc900

        ## Next JS

        https://github.com/luizrosalba/dj-events-frontend
        https://github.com/luizrosalba/dj-events-backend

        ## Node JS

        https://github.com/luizrosalba/resumo/blob/master/node.md

        ## OO

        https://github.com/luizrosalba/OO

        ## URI

        https://github.com/luizrosalba/uri

        ## Webpack

        https://github.com/luizrosalba/webpack-tutorial
        https://github.com/luizrosalba/webpack-2-complete-dev-guide

        ## Yarn

        Yarn link can replace remote packages with local
        https://classic.yarnpkg.com/en/docs/cli/link
        w
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        footer
      </footer>
    </div>
  );
}
