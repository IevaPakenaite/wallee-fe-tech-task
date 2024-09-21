import { useEffect, useState } from "react";
import PageTitle from "./components/PageTitle";
import CheckboxListPanel from "./components/CheckboxListPanel";
import schema from "./data/page-schema.json";

interface SchemaProps {
  title: string;
  components?: any[];
}

function App() {
  const [pageSchema, setPageSchema] = useState<SchemaProps>();

  useEffect(() => {
    setPageSchema(schema);
  }, []);

  const renderComponent = (componentData: any) => {
    switch (componentData.type) {
      case "page-title":
        return <PageTitle key="page-title" label={componentData.label} />;
      case "checkbox-list-panel":
        return (
          <CheckboxListPanel
            key="checkbox-list-panel"
            options={componentData.options}
            onSubmit={componentData.onSubmit}
          />
        );
      default:
        break;
    }
  };

  if (!pageSchema?.components) {
    return <div>Page not found</div>;
  }

  return (
    <>
      {pageSchema.components?.map((componentData) =>
        renderComponent(componentData)
      )}
    </>
  );
}

export default App;
