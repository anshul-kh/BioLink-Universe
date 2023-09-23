import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../utils/client";
import { userQuery, dataQuery } from "../utils/query";
import { Github, LinkedIn, Youtube, Insta, Blog, Save } from "../assets/index";
import EditSocial from "../components/EditSocial";
import EditOther from "../components/EditOther";


const Edit = () => {
  const [state, setState] = useState({
    user: null,
    text: '',
    github: '',
    youtube: '',
    linkedIn: '',
    insta: '',
    blog: '',
    link1: '',
    link2: '',
    link3: '',
    link4: '',
    inp1: '',
    inp2: '',
    inp3: '',
    inp4: '',
    bioId: '',
    data: null,
    existingDoc: true,
  });



  const { userId } = useParams();

  // //data state
  // const [data, setData] = useState();
  // const [existingDoc, setExistingDoc] = useState(true);

  const { userName, profImg } = state.user || {};

  //check data already exist or not

  function uploadOrEditDocument(_id) {
    const myNewDocument = {
      _id: _id || "",
      _type: "profile", // schema type
      userId: userId,
      intro: state.text,
      github: state.github,
      linkedIn: state.linkedIn,
      blogs: state.blog,
      instagram: state.insta,
      youtube: state.youtube,
      other1: {
        _type: "other1",
        input: state.inp1,
        title: state.link1,
      },
      other2: {
        _type: "other2",
        input: state.inp2,
        title: state.link2,
      },
      other3: {
        _type: "other3",
        input: state.inp3,
        title: state.link3,
      },
      other4: {
        _type: "other4",
        input: state.inp4,
        title: state.link4,
      },
    };

    try {
      if (state.existingDoc) {
        client.patch(_id).set(myNewDocument).commit();
        console.log("Document updated successfully.");
      } else {
        client.createIfNotExists(myNewDocument);
        console.log("Document created successfully.");
      }
    } catch (error) {
      console.error("Error uploading or editing the document:", error.message);
    }
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const query = userQuery(userId);
        await client.fetch(query).then((data) => {
          setState(prevState => ({ ...prevState, user: data[0], bioId: data[0]?.bioId }));
        });

        const data_query = dataQuery(state.bioId);
        client.fetch(data_query).then((data) => {
          setState(prevState => ({ ...prevState, data: data[0], text: data[0]?.intro, existingDoc: data.length !== 0 }));
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [userId]);



  // console.log(data);

  return (
    <div className="flex flex-col justify-start h-auto min-h-full overflow-y-scroll no-scrollbar items-center gap-1 w-3/5 ">
      <div className="w-full mt-28 flex flex-col justify-center items-center">
        <img
          src={profImg}
          alt="userImage"
          className="rounded-full w-36 h-36 -mt-10 border-4  border-white drop-shadow-2xl relative"
        />
        <p className="font-patua text-2xl">{userName}</p>

        <textarea
          className="flex justify-start mt-6 items-start bg-card rounded-2xl drop-shadow-xl  md:w-3/6 h-auto relative p-1 text-center text-xl  whitespace-pre-wrap"
          value={state.text}
          onChange={(e) => setState(prevState => ({ ...prevState, text: e.target.value }))}
          style={{
            height: "150px",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            overflowY: "scroll",
          }}
          placeholder="Enter Your Bio Text Here. Please note it should not be more that 40 words"
        />
      </div>



      <div className="flex flex-col w-full justify-center items-center gap-8 mt-7">
        <EditSocial
          icon={Github}
          title={"GitHub"}
          state={state.github}
          setState={(value) => setState(prevState => ({ ...prevState, github: value }))}
        />
        <EditSocial
          icon={LinkedIn}
          title={"LinkedIn"}
          state={state.linkedIn}
          setState={(value) => setState(prevState => ({ ...prevState, linkedIn: value }))}
        />
        <EditSocial
          icon={Blog}
          title={"Blogs"}
          state={state.blog}
          setState={(value) => setState(prevState => ({ ...prevState, blog: value }))}
        />
        <EditSocial
          icon={Insta}
          title={"Instagram"}
          state={state.insta}
          setState={(value) => setState(prevState => ({ ...prevState, insta: value }))}
        />
        <EditSocial
          icon={Youtube}
          title={"Youtube"}
          state={state.youtube}
          setState={(value) => setState(prevState => ({ ...prevState, youtube: value }))}
        />
      </div>

      <div className="text-center flex  w-full flex-col justify-center items-center font-patua mt-5 gap-3 mb-5">
        <p className="text-2xl">Other Links</p>
        <EditOther
          link={state.link1}
          setLink={(value) => setState(prevState => ({ ...prevState, link1: value }))}
          inp={state.inp1}
          setInp={(value) => setState(prevState => ({ ...prevState, inp1: value }))}
          state={state}
        />
        <EditOther
          link={state.link2}
          setLink={(value) => setState(prevState => ({ ...prevState, link2: value }))}
          inp={state.inp2}
          setInp={(value) => setState(prevState => ({ ...prevState, inp2: value }))}
          state={state}
        />
        <EditOther
          link={state.link3}
          setLink={(value) => setState(prevState => ({ ...prevState, link3: value }))}
          inp={state.inp3}
          setInp={(value) => setState(prevState => ({ ...prevState, inp3: value }))}
          state={state}
        />
        <EditOther
          link={state.link4}
          setLink={(value) => setState(prevState => ({ ...prevState, link4: value }))}
          inp={state.inp4}
          setInp={(value) => setState(prevState => ({ ...prevState, inp4: value }))}
          state={state}
        />
      </div>

      <button className="w-16 h-16  text-white rounded-full text-2xl font-patua drop-shadow-2xl fixed bottom-10 left-3/4 z-30 ">
        <img
          src={Save}
          alt="save"
          onClick={() => {
            uploadOrEditDocument(state.bioId);
          }}
        />
      </button>
    </div>
  );
};

export default Edit;
