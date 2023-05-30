import React from "react";

export default () => {
  return (
      <div class="flex justify-center items-center h-screen bg-blue-100 Achi">
        <article class="container box-border max-w-full w-96 mx-auto rounded-md bg-white overflow-hidden shadow-lg">
          <section class="px-8 pt-8 pb-12">
            <input
              id="contenteditable"
              class="absolute top-4 left-4 w-6 h-6"
              name="contenteditable"
              type="checkbox"
              checked
            />
            <label class="absolute top-4 left-10 inline-block ml-2 mb-4">
              Content editable{" "}
              <span class="text-gray-500">(only with -webkit support)</span>
            </label>
            <h1 class="text-2xl mb-4" contenteditable>
              Edit me !
            </h1>
            <p class="mb-4" contenteditable>
              You can edit all the content on this page directly in the render
              view. Simply click on a text element and type your new content.
            </p>
            <p class="mb-8" contenteditable>
              If you want to disable the editable feature, uncheck the box at
              the top of the screen.
            </p>
            <div class="flex justify-between" contenteditable>
              <span>@DeyJordan</span>
              <div class="flex items-center">
              </div>
            </div>
          </section>
          <img src="https://picsum.photos/id/4/300/200" class="w-50" alt="" />
          <img src="https://picsum.photos/id/4/300/200" class="w-50" alt="" />
        </article>
      </div>
  );
};
