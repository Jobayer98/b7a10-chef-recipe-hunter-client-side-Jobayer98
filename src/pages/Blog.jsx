const BlogPage = () => {
  return (
    <div className="mt-8 lg:m-12 flex flex-col items-center">
      <h1 className="mb-8 text-center text-2xl font-semibold">Blog Page</h1>
      <div className="p-2 lg:p-12 border-2 mb-8 w-[80%]">
        <h2 className="text-2xl font-semibold mb-4">
          Differences between uncontrolled and controlled components.
        </h2>
        <div className="px-4">
          <span className="font-semibold">Uncontrolled: </span>
          <p className="lg:max-w-[70%]">
            It maintains its internal states.Here, data is controlled by the DOM
            itself.It uses a ref for their current values.It does not allow
            validation control.It has limited control over the form elements and
            data.
          </p>
          <span className="font-semibold mt-2 block">Controlled: </span>
          <p className="lg:max-w-[70%]">
            It does not maintain its internal state.Here, data is controlled by
            the parent component.It accepts its current value as a prop.It
            allows validation control.It allows validation control.
          </p>
        </div>
      </div>
      <div className="p-12 border-2 mb-8 w-[80%]">
        <h2 className="text-2xl font-semibold mb-4">
          How to validate React props using PropTypes
        </h2>
        <p className="lg:max-w-[70%] px-4">
          The prop can be of any data type. The prop should be a Boolean.The
          prop should be a number.The prop should be a string.The prop should be
          a function. The prop should be an array.
        </p>
      </div>
      <div className="p-12 border-2 mb-8 w-[80%]">
        <h2 className="text-2xl font-semibold mb-4">
          Tell us the difference between node js and express js.
        </h2>
        <div className="px-4">
          <span className="font-semibold">Node.js: </span>
          <p className="lg:max-w-[70%]">
            Node.js is an open source and cross-platform runtime environment for
            executing JavaScript code outside of a browser. You need to remember
            that NodeJS is not a framework and it’s not a programming language.
          </p>

          <span className="font-semibold mt-2 block">Express.js: </span>
          <p className="lg:max-w-[70%]">
            Express is a small framework that sits on top of Node.js’s web
            server functionality to simplify its APIs and add helpful new
            features. It makes it easier to organize your application’s
            functionality with middle ware and routing.
          </p>
        </div>
      </div>
      <div className="p-12 border-2 mb-8 w-[80%]">
        <h2 className="text-2xl font-semibold mb-4">
          What is a custom hook, and why will you create a custom hook?
        </h2>
        <p className="lg:max-w-[70%] px-4">
          Custom React JS hooks offer reusability as when a custom hook is
          created, it can be reused easily, which makes the code cleaner and
          reduces the time to write the code.
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
