import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)} className="my-md-2 mx-auto w-full">
      <div className="d-flex gap-2">
        <Form.Control
          type="text"
          name="query"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products"
        ></Form.Control>
        <Button type="submit" variant="outline-success">
          Search
        </Button>
      </div>
    </Form>
  );
};
export default SearchBox;
