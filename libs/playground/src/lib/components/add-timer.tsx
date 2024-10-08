export const AddTimer = () => {
  //  const form = useRef<FormHandle>(null);

  function handleSaveTime(data: unknown) {
    const extractedData = data as { name: string; duration: string };
    console.log(extractedData);
    // form.current?.clear();
  }

  return (
    <div>HELLO</div>
    // <Form ref={form} onSave={handleSaveTime} id="add-timer">
    //   <Input type="text" label="Name" id="name" />
    //   <Input type="text" label="Duration" id="duration" />
    //
    //   <p>
    //     <Button>Add Timer</Button>
    //   </p>
    // </Form>
  );
};
