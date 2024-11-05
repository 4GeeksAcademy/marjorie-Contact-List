const getState = ({ getStore, getActions, setStore }) => {

	return {

		store: {

			contact: [{
				name: "",
				email: "",
				phone: "",
				address: "",

			}]
		},
		actions: {

			getContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/marjorie/contacts")
					.then((response) => response.json())
					.then((data) => setStore({ contact: data.contacts }))
					.catch((error) => error)
			},

			addContact: (name, email, phone, address) => {
				fetch("https://playground.4geeks.com/contact/agendas/marjorie/contacts", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name: name,
						email: email,
						phone: phone,
						address: address
					}),

				})
					.then((response) => response.jason())
					.then(() => getActions().getContacts())
					.catch((error) => error)
			},
			editContact: (id, editContact) => {
				fetch("https://playground.4geeks.com/contact/agendas/marjorie/contacts" + id, {
					method: "PUT",
					headers: {
						"content-Type": "application/json",
					},
					body: JSON.stringify(editContact),
				})
					.then((response) => response.jason())
					.then(() => getActions().getContacts())
					.catch((error) => error)
			},

			delContacts: function (id) {
				fetch("https://playground.4geeks.com/contact/agendas/marjorie/contacts" + id, {
					method: 'DELETE'
				})
					.then((response) => response.json())
					.then(() => getActions().getContacts())
					.catch((error) => error)
			},

		}
	};
};

export default getState;
