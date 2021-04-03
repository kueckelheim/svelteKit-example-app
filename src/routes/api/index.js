import faker from 'faker';

const generateCovers = () =>
	[...Array(50)].map(() => {
		const lastName = faker.name.lastName();
		return { avatar: `https://avatars.dicebear.com/api/human/${lastName}.svg`, lastName };
	});

export async function get() {
	return {
		body: generateCovers()
	};
}
