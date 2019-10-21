import React from "react";
//render allows the rendering of all components and act will wait for all events such as axios to resolve before moving on to the assertions
import { render, act } from "@testing-library/react";
import Post from "../views/Post";
//When working with components with axios calls must import axios
import axios from "axios";
//Memory router is a lightweight provider giving access to withRouter
import { MemoryRouter } from "react-router-dom";
import { posts } from "./_data_/testData";

// it("Renders out a post widget", async () => {
//   const post = posts[0];
//   let container;
//   jest
//     .spyOn(axios, "get")
//     .mockImplementaion(() => Promise.resolve({ data: post }));
//   await act(async () => {
//     let renderObj = render(
//       <MemoryRouter>
//         <Post match={{ params: { postId: 1 } }} />
//       </MemoryRouter>
//     );
//     container = renderObj.container;
//   });

  it("Renders out a post widget", async () => {
    const post = posts[0];
    let container;
    jest
      .spyOn(axios, "get")
      .mockImplementation(() => Promise.resolve({ data: post }));
    await act(async () => {
      let renderObj = render(
        <MemoryRouter>
          <Post match={{ params: { postId: 1 } }} />
        </MemoryRouter>
      );
      container = renderObj.container;
    });
    expect(container.textContent).toContain(post.text);
  });

