import { shortenText } from "../utils/functions";
import { wordCount, attachUserName } from "../../server/utils";
import { shortText, longText, posts, users } from "./_data_/testData";

it("shortenText should not alter a string with less than 100 characters", () => {
  expect(shortenText(shortText)).toHaveLength(29);
}),
  it("shortenText should cut off extra characters after 100 and add three periods", () => {
    //this variable is created due to the reference of long text twice
    const shortened = shortenText(longText);
    //first call to shortened is we don't expect length of equal to not be to the length of long text
    expect(shortened).not.toHaveLength(longText.length);
    //this will expect that the last three characters be equal to threee periods
    expect(shortened.slice(-3)).toBe("...");
  }),
  it('wordCount should correctly count the number of words in a sentence',() => {
      expect(wordCount(posts)).toBe(233)
  })
  it('attachUserName should correctly attach a users full name to a post', () => {
      const newPosts = attachUserName(users,posts)
      expect(newPosts[0]).toHaveProperty('displayName')
  }),
  it('attachUsername should remove any post with no matching user',() => {
      const newPosts = attachUserName(users,posts)
      const deletedPost = posts[5]
      expect(newPosts).not.toContainEqual(deletedPost)
  })





  