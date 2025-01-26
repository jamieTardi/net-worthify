"use client";

import React from "react";
import { Modal } from "../../../../components/Generic";

const Login = () => {
	const [isOpen, setIsOpen] = React.useState(true);
	return (
		<div>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Login">
				<h1 style={{ color: "red" }}>Hello</h1>
				<p style={{ color: "red" }}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas minima iusto perspiciatis vel nobis
					possimus veniam harum dolores mollitia, error, natus, quaerat tempora saepe. Et corrupti minima delectus,
					doloremque id veritatis laudantium unde similique ducimus, voluptas nemo sunt qui reiciendis dolores ipsa.
					Perspiciatis, quos. Excepturi sequi dolorum vero eos facere perferendis totam delectus facilis quod quas culpa
					temporibus, repellat optio voluptatem, eum id mollitia assumenda, provident consequatur consequuntur corrupti
					omnis! Odio dolores perspiciatis esse rerum libero nulla neque, fugiat vel unde, repellat quis cum doloribus
					dolor quos fuga ducimus voluptas repellendus. Sequi rem laudantium asperiores porro nemo ducimus inventore ad.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laboriosam distinctio non suscipit deserunt
					neque in cumque modi, eligendi veritatis nobis, ipsum ab consectetur, provident earum iure corrupti illo
					exercitationem eveniet rem sit! Eum, sapiente fuga rerum saepe aliquid cupiditate molestiae accusamus dolorum,
					perspiciatis blanditiis quisquam sit corrupti minus cum officiis. Neque tenetur fugiat nisi esse dolore odit
					placeat reiciendis earum iusto ut distinctio repudiandae dolor, veritatis delectus laborum sequi? Obcaecati
					quasi incidunt iste soluta commodi ad illo consequuntur dolores, ducimus, minima, repellat voluptas ratione
					nesciunt natus voluptatibus minus esse saepe magni! Dicta, magni? Necessitatibus, quam quos neque nostrum at
					eos possimus dolorem aperiam vel quibusdam totam alias quod dicta consequuntur quia facere, veritatis
					temporibus, error veniam! Nesciunt aliquam dicta expedita quae mollitia autem doloremque excepturi quidem,
					placeat iusto? Fuga vitae rerum repudiandae. A sint dolorum laboriosam harum deleniti nam eum laudantium
					dolorem eos sapiente provident dolor saepe voluptatem explicabo quod, ullam deserunt quos tenetur voluptatibus
					quam odit dolores. Id temporibus recusandae neque natus officiis quos reprehenderit consequuntur, consequatur
					molestiae quae, suscipit eveniet alias beatae et architecto earum nihil ducimus tempora! Iure est iusto neque?
					Numquam, neque. Sed, aliquam quia, fugit libero culpa tempora quod eos magni quis quaerat, reprehenderit
					itaque? Magnam quaerat sunt, corporis iste expedita ea odio, nobis fugiat veniam vero eos quam praesentium
					facilis non ratione aspernatur voluptates maxime quos quis! Animi vero ducimus fugiat modi accusantium?
					Voluptate reprehenderit neque dolores deserunt reiciendis veniam architecto. Ex est nihil deleniti molestias
					eos ipsa facere facilis reprehenderit impedit magni.
				</p>
			</Modal>
		</div>
	);
};

export default Login;
