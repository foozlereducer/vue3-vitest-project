<h1>Vue 3 Vitest Project</h1>
    <p>This is a simple Vue 3 project configured with Vitest for testing, set up to help you get started with modern Vue development and automated testing using Test-Driven Development (TDD).</p>
    
<h2>Table of Contents</h2>
<ul>
<li><a href="#overview">Overview</a></li>
<li><a href="#features">Features</a></li>
<li><a href="#getting-started">Getting Started</a>
<ul>
<li><a href="#prerequisites">Prerequisites</a></li>
<li><a href="#installation">Installation</a></li>
<li><a href="#running-the-app-and-tests">Running the App and Tests</a></li>
 </ul>
</li>
<li><a href="#project-structure">Project Structure</a></li>
<li><a href="#testing">Testing</a></li>
<li><a href="#scripts">Scripts</a></li>
<li><a href="#license">License</a></li>
  </ul>

<h2 id="overview">Overview</h2>
<p>This project demonstrates a basic Vue 3 application with a Counter component that allows incrementing and decrementing a value. The project includes a test setup using Vitest and Vue Test Utils for unit testing, providing a foundation for following Test-Driven Development (TDD) principles.</p>

<h2 id="features">Features</h2>
<ul>
        <li><strong>Vue 3 Composition API</strong>: Utilizes the Vue 3 Composition API for better reusability and code organization.</li>
        <li><strong>Hot Module Replacement (HMR)</strong>: Provided by Vite for fast and efficient development.</li>
        <li><strong>Vitest Integration</strong>: Test runner and assertion library to ensure components work as expected.</li>
        <li><strong>Test Coverage</strong>: Tests for the <code>Counter</code> component using <code>assert</code> and <code>expectTypeOf</code>.</li>
</ul>

<h2 id="getting-started">Getting Started</h2>

<h3 id="prerequisites">Prerequisites</h3>
<p>Ensure you have Node.js (version 20.8.0 or higher) and npm installed. You can use <a href="https://github.com/nvm-sh/nvm">nvm</a> to manage Node.js versions.</p>

<h3 id="installation">Installation</h3>
<ol>
<li>Clone this repository:
<pre><code>git clone &lt;repository-url&gt;
cd vue3-vitest-project</code></pre>
 </li>
<li>Install dependencies:
<pre><code>npm install</code></pre>
</li>
</ol>

<h3 id="running-the-app-and-tests">Running the App and Tests</h3>
<p>To run the development server and watch for changes:</p>
<pre><code>npm run dev:test</code></pre>
 <p>This command runs both the development server (on port <code>3232</code>) and the test watcher concurrently. The app should be accessible at <a href="http://localhost:3232">http://localhost:3232</a>.</p>

<h2 id="project-structure">Project Structure</h2>
<ul>
<li><strong>vite.config.js</strong>: Configuration for Vite, including hot-reloading and server setup.</li>
<li><strong>package.json</strong>: Contains project scripts and dependencies.</li>
<li><strong>src/components/Counter.vue</strong>: A simple Counter component with increment and decrement functionality.</li>
<li><strong>tests/components/Counter.spec.js</strong>: Test file for the Counter component, written using Vitest.</li>
<li><strong>src/App.vue</strong>: Main app component, includes a logo and the Counter component.</li>
</ul>

<h2 id="testing">Testing</h2>
<p>This project uses Vitest for unit testing Vue components.</p>
<h2>
<a href="https://vitest.dev/guide/why.html" alt="Vitest Documentation - the official website" target="_blank">Vitest Documentation</a></h2>
<ul>
<li><strong>Unit Tests</strong>: Located in <code>tests/components/Counter.spec.js</code>.</li>
<li>The tests include verifying the initial value of the counter, checking if the increment and decrement buttons update the counter value properly, and type checks using <code>assertType</code> and <code>expectTypeOf</code>.</li>
</ul>
<p>To run the tests only:</p>
 <pre><code>npm run test</code></pre>
<p>To run the tests in watch mode:</p>
<pre><code>npm run test:watch</code></pre>
<h2 id="scripts">Scripts</h2>
<ul>
<li><code>npm run dev</code>: Runs the development server.</li>
<li><code>npm run test</code>: Runs the tests once.</li>
<li><code>npm run test:watch</code>: Runs the tests in watch mode.</li>
<li><code>npm run dev:test</code>: Runs the development server and test watcher concurrently.</li>
</ul>


<h2 id="license">License</h2>
<p>This project is open-source and available under the <a href="LICENSE">MIT License</a>.</p>

