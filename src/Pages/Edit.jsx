import MenuItemEditForm from "../Components/MenuItemEditForm";

function Edit() {
    return (
        <div className="Edit">
            <img src="/images/Edit.png" width="100%" alt="pic of a menu" />

            <div className="EditForm">
                <h2> Edit </h2>
                <MenuItemEditForm />
            </div>
        </div>
    );
}

export default Edit;