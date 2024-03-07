# Next with Animated Avatar Offload

### This Example Code is a Part of an Article: Optimizing 3D Model Rendering in Next.js by Reducing Blocking Time Using React Fiber Offscreen

<hr />

##### Live Url (Without Web Worker): [Deployment](https://next-with-animated-avatar.vercel.app/)
##### Live Url (With Web Worker): [Deployment](https://next-with-animated-avatar-offload.vercel.app/)
##### Article Link: [Medium](https://faraasat.medium.com/optimizing-3d-model-rendering-in-next-js-by-reducing-blocking-time-using-react-fiber-offscreen-11bd39ca7a67)

<hr />

### Background and Problem Statement: 
When dealing with CPU-intensive operations on the web, such as rendering 3D models, we often encounter sluggishness and unresponsiveness. The initial loading time of a web page significantly impacts user experience, and rendering complex 3D content can exacerbate this issue. To address this challenge, we’ll leverage Web Workers to load 3D models behind the scenes, thereby reducing blocking time.

### Optimization Approach:

#### 1. React Three Fiber and Web Workers: 
- We kick off our optimization journey by installing the `@react-three/offscreen` dependency, which allows us to render 3D models using React Three Fiber within Web Workers. This separation enables smoother interactions during the initial page load.
#### 2. Refactoring the Rendering Logic: 
- In our existing code, the 3D model rendering logic resides within the main component. To improve performance, we’ll split this into separate files. First, we create a `scene.tsx` file that contains the scene setup (ambient lighting, environment, etc.). Then, we create a worker named `worker.tsx` that imports the scene. By doing so, we offload the rendering work from the main thread, enhancing responsiveness.
#### 3. Web Workers in Action: 
- The `worker.tsx` file utilizes Web Workers to handle the 3D model rendering. This approach ensures that CPU-intensive tasks don’t block the main thread, allowing the rest of the page to remain interactive. By moving the heavy lifting to a separate thread, we achieve a more fluid user experience.

### Conclusion:
In summary, by adopting React Fiber Offscreen and Web Workers, we optimize the loading time of 3D models in Next.js applications. This technique enhances performance, making our web pages more responsive and delightful for users1. If you’re interested in learning more about Web Workers or other Next.js optimizations, feel free to explore related articles

### Result:
- Performance and Blocking Time when using Web Workers:
  
![1_G7tiXabttx11biy9QNdgDw](https://github.com/faraasat/next-with-animated-avatar-offload/assets/63093876/d70096e6-a4cd-4f00-8e6e-28bb323e1b24)

- Performance and Blocking Time when not using Web Workers:
  
![1_l010ytw5HRTy7xj5bismXA](https://github.com/faraasat/next-with-animated-avatar-offload/assets/63093876/3e5e9c46-eebd-4650-919a-7b7defcae9a8)
