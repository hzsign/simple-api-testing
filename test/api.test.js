import axios from "axios";
import { expect } from "chai";

describe("API Testing", () => {
  it("should return status 200 for GET /posts/1", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    expect(response.status).to.equal(200);
  });

  it("should return status 200 for GET /comments/1", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments/1"
    );
    expect(response.status).to.equal(200);
  });
});
