import React from 'react'
import {
    Col,
    Card,
    CardHeader,
    CardText,
    ListGroup,
    ListGroupItem,
    Button
  } from "reactstrap";
  import { Link } from 'react-router-dom';
function UserCard({el}) {
  return (
    <div>
    <Col sm="12" md="6" className="my-3">
      <Card>
        <CardHeader className="p-4 d-flex justify-content-around align-items-center ">
          <CardText
            style={{
              width: "70px",
              height: "70px",
              fontSize: "1.5em"
            }}
            className="d-flex justify-content-center align-items-center mr-auto border rounded-circle text-light bg-info text-md"
          >
            {el.name[0]}
          </CardText>
          <ListGroup flush className="w-75">
            <ListGroupItem>{el.name}</ListGroupItem>
            <ListGroupItem>{el.email}</ListGroupItem>
            <Button
              className="px-0 bg-info"
              color="link"
              onClick={(e) => e.preventDefault()}
            >
                <Link to={`/Profile/${el.id}`} >
             go to profile
             </Link>
            </Button>
          </ListGroup>
        </CardHeader>
      </Card>
    </Col>
    </div>
  )
}

export default UserCard
