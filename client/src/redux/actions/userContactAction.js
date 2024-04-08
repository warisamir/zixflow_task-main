// Required Package Import;
import axios from 'axios';
import { getContact } from '../reducers/reducer';
import Swal from 'sweetalert2';

//Create New Contact
export const createNewContact = (data, navigate) => {
    return async () => {
        try {
            const response = await axios.post(`https://zixflow-task.vercel.app/contact/createContact`, data);
            console.log(response.data);
            if (response.data.status === true) {
                Swal.fire({
                    title: "Good job!",
                    text: "New Contact Created",
                    icon: "success"
                });
                navigate('/');
            } else {
                Swal.fire({
                    title: "Error!",
                    text: response.data.message || "An error occurred while creating the contact.",
                    icon: "error"
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Warning",
                text: error.response.data.message || "An error occurred while creating the contact.",
                icon: "warning"
            });
        }
    };
};


//Fetch All Contacts;
export const fetchContacts = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://zixflow-task.vercel.app/contact/getContactsList`);
            dispatch(getContact(response.data.data))
        } catch (error) {
            console.error(error.message);
        }
    };
};

//Update Contacts
export const updateContact = (data) => {
    return async () => {
        try {
            await axios.put(`https://zixflow-task.vercel.app/contact/updateContactById/${data.id}`, data);
        } catch (error) {
            console.error(error.message);
        }
    };
};

//Single Row Delete
export const deleteContact = (id) => {
    return async () => {
        try {
            await axios.delete(`https://zixflow-task.vercel.app/contact/deleteContactById/${id}`);
        } catch (error) {
            console.error(error.message);
        }
    };
};

//Multiple Delete
export const SelectedDeleteContact = (idList) => {
    return async () => {
        try {
            await axios.delete(`https://zixflow-task.vercel.app/contact/deleteContactList`, { data: { listId: idList } });
        } catch (error) {
            console.error(error.message);
        }
    };
};