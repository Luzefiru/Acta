import "./CreatePost.css";
import TextField from "../../components/forms/TextField";
import TextArea from "../../components/forms/TextArea";
import GhostButton from "../../components/ui/GhostButton";
import ContainedButton from "../../components/ui/ContainedButton";
import React, { useState } from "react";

function CreatePost() {
  return (
    <form className="CreatePost">
      <h1>Create a New Article</h1>
      <div className="CreatePost__articleDetails">
        <h3>Article Details</h3>
        <fieldset className="CreatePost__fieldset">
          <TextField
            className="CreatePost__fieldset__title"
            id="title"
            label="Title"
            placeholder="What your article is about"
          />
          <TextArea
            className="CreatePost__fieldset__body"
            id="body"
            label="Body"
            placeholder="Share your thoughts here"
          />
        </fieldset>
        <div className="CreatePost__tags">
          <h4>Tags</h4>
          <div className="CreatePost__addedTags"></div>
          <button className="CreatePost__addTag-btn">+ Add another tag</button>
        </div>
        <div className="CreatePost__mainButtons">
          <GhostButton content="Cancel" />
          <GhostButton content="Save" />
          <ContainedButton>Save and Publish</ContainedButton>
        </div>
      </div>
    </form>
  );
}

export default CreatePost;
