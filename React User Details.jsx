import { useReducer } from "react";

function reducer(state, action) {
  const { type } = action;
  if (type === "name") {
    const { value } = action;
    // console.log({...state, name: value})
    return { ...state, name: value };
  } else if (type === "username") {
    const { user } = action;
    return { ...state, username: user };
  } else if (type === "bio") {
    const { about } = action;
    return { ...state, bio: about };
  }
}

function UserDetails() {
  const initialState = {
    name: "Display Name",
    username: "Username",
    bio: "Bio"
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleName(e) {
    const { value } = e.target;
    dispatch({
      type: "name",
      value
    });
  }
  function handleUsername(e) {
    const { value } = e.target;
    dispatch({
      type: "username",
      user: value
    });
  }
  function handleBio(e) {
    const { value } = e.target;
    dispatch({
      type: "bio",
      about: value
    });
  }

  return (
    <div className="user-details-container">
      <h1>User Details</h1>
      <form>
        {/* add onChange */}
        <input
          type="text"
          value={state.name}
          placeholder="Display Name"
          onChange={(e) => handleName(e)}
        />
        <input
          type="text"
          value={state.username}
          placeholder="Username"
          onChange={(e) => handleUsername(e)}
        />
        <textarea
          value={state.bio}
          placeholder="Bio"
          onChange={(e) => handleBio(e)}
        />
      </form>
    </div>
  );
}

export default UserDetails;
