import React, { useState, useEffect } from "react";
import { Header, Menu, List, Container } from "semantic-ui-react";
import axios from "axios";

const SiteHeader = () => {
  const [activeCategory, setActiveCategory] = useState("workshops");
  const [importedData, setImportedData] = useState([]);

  useEffect(() => {
    axios.get("./data/courses.json").then((response) => {
      setImportedData(response.data.courses);
    });
  }, []);

  const filteredCategories = importedData.filter(
    (course) => course.category === activeCategory
  );

  let categoryContent = filteredCategories.map((course) => {
    return (
      <List key={course} borderless compact>
        <List.Header data-cy="course-header"><h1>{course.title}</h1></List.Header>
        <List.Content data-cy="course-description">
          {course.description}
        </List.Content>
        <List.Item data-cy="course-category">
          <strong>Category: </strong>
          {course.category}
        </List.Item>
        <List.Item data-cy="course-onstructors">
          <strong>Instructors: </strong>
          {course.instructors}
        </List.Item>
        <List.Item data-cy="course-info">{course.info}</List.Item>
        <List.Item data-cy="course-price">
          <strong>Price: </strong>
          {course.price}
        </List.Item>
      </List>
    );
  });

  return (
    <>
      <Header size="huge" color="orange" textAlign="center">
        <h1 data-cy="header">COURSE LIST</h1>
      </Header>
      <Menu>
        <Menu.Item
          header
          name="Workshops"
          active={activeCategory === "workshops"}
          onClick={() => setActiveCategory("workshops")}
        >
          Workshops
        </Menu.Item>

        <Menu.Item
          name="Testing"
          active={activeCategory === "testing"}
          onClick={() => setActiveCategory("testing")}
        >
          Testing
        </Menu.Item>

        <Menu.Item
          name="Vue"
          active={activeCategory === "vue"}
          onClick={() => setActiveCategory("vue")}
        >
          Vue
        </Menu.Item>

        <Menu.Item
          name="Productivity"
          active={activeCategory === "productivity"}
          onClick={() => setActiveCategory("productivity")}
        >
          Productivity
        </Menu.Item>

        <Menu.Item
          name="Node"
          active={activeCategory === "node"}
          onClick={() => setActiveCategory("node")}
        >
          Node
        </Menu.Item>

        <Menu.Item
          name="React"
          active={activeCategory === "react"}
          onClick={() => setActiveCategory("react")}
        >
          React
        </Menu.Item>
      </Menu>

      <Container text>{categoryContent}</Container>
    </>
  );
};

export default SiteHeader;
