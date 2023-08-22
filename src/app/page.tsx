import AddTodo from "@/components/addTodo";
import Todos from "@/components/todos";

export default function Home() {
	return (
		<>
			<main className="flex flex-col gap-4 justify-center items-center pt-40">
				<AddTodo />
				<Todos />
			</main>
		</>
	);
}
