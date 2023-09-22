import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../utils/client";
import { userQuery, dataQuery } from "../utils/query";
import { Github, LinkedIn, Youtube, Insta, Blog, Save } from "../assets/index";
import EditSocial from "../components/EditSocial";
import EditOther from "../components/EditOther";

const Edit = () => {
  const [user, setUser] = useState(null);
  const [text, setText] = useState();
  const [github, setGithub] = useState();
  const [youtube, setYoutube] = useState();
  const [linkedIn, setLinkedIn] = useState();
  const [insta, setInsta] = useState();
  const [blog, setBlog] = useState();
  //link
  const [link1, setLink1] = useState();
  const [link2, setLink2] = useState();
  const [link3, setLink3] = useState();
  const [link4, setLink4] = useState();
  //inp
  const [inp1, setInp1] = useState();
  const [inp2, setInp2] = useState();
  const [inp3, setInp3] = useState();
  const [inp4, setInp4] = useState();

  const [bioId, setBioId] = useState("");

  const { userId } = useParams();

  //data state
  const [data, setData] = useState();
  const [existingDoc, setExistingDoc] = useState(true);

  const { userName, profImg } = user || {};

  //check data already exist or not

     function uploadOrEditDocument(_id) {
       
    const myNewDocument = {
      _id: _id || "",
      _type: "profile", // schema type
      userId: userId,
      intro: text,
      github: github,
      linkedIn: linkedIn,
      blogs: blog,
      instagram: insta,
      youtube: youtube,
      other1: {
        _type: "other1",
        input: inp1,
        title: link1,
      },
      other2: {
        _type: "other2",
        input: inp2,
        title: link2,
      },
      other3: {
        _type: "other3",
        input: inp3,
        title: link3,
      },
      other4: {
        _type: "other4",
        input: inp4,
        title: link4,
      },
    };

    try {
      // Check if the document exists by querying based on a unique identifier
      if (existingDoc) {
        // Document exists, update it
        client.patch(_id).set(myNewDocument).commit();
        console.log("Document updated successfully.");
      } else {
        // Document doesn't exist, create a new one
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
          setUser(data[0]);
          setBioId(data[0]?.bioId);
        });

        const data_query = dataQuery(bioId);
        client.fetch(data_query).then((data) => {
          setData(data[0]);
             //set data according
             setText(data[0]?.intro);
             setGithub(data[0]?.github);     
             
          if (data.length === 0) {
            setExistingDoc(false);
          } else {
               setExistingDoc(true);
             }
             
             
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [userId]);




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
          defaultValue={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            height: "150px",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            overflowY: "scroll",
          }}
          placeholder="Enter Your Bio Text Here. Please note it should not be more that 40 words"
                 ></textarea>
      </div>

      <div></div>

      <div className="flex flex-col w-full justify-center items-center gap-8 mt-7">
        <EditSocial
          icon={Github}
          title={"GitHub"}
          state={github}
          setState={setGithub}
        />
        <EditSocial
          icon={LinkedIn}
          title={"LinkedIn"}
          state={linkedIn}
          setState={setLinkedIn}
        />
        <EditSocial
          icon={Blog}
          title={"Blogs"}
          state={blog}
          setState={setBlog}
        />
        <EditSocial
          icon={Insta}
          title={"Instagram"}
          state={insta}
          setState={setInsta}
        />
        <EditSocial
          icon={Youtube}
          title={"Youtube"}
          state={youtube}
          setState={setYoutube}
        />
      </div>

      <div className="text-center flex  w-full flex-col justify-center items-center font-patua mt-5 gap-3 mb-5">
        <p className="text-2xl">Other Links</p>
        <EditOther
          link={link1}
          setLink={setLink1}
          inp={inp1}
          setInp={setInp1}
        />
        <EditOther
          link={link2}
          setLink={setLink2}
          inp={inp2}
          setInp={setInp2}
        />
        <EditOther
          link={link3}
          setLink={setLink3}
          inp={inp3}
          setInp={setInp3}
        />
        <EditOther
          link={link4}
          setLink={setLink4}
          inp={inp4}
          setInp={setInp4}
        />
      </div>

      <button className="w-16 h-16  text-white rounded-full text-2xl font-patua drop-shadow-2xl fixed bottom-10 left-3/4 z-30 ">
        <img
          src={Save}
          alt="save"
          onClick={() => {
            uploadOrEditDocument(bioId);
          }}
        />
      </button>
    </div>
  );
};

export default Edit;
