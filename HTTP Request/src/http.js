export async function fetchAvailablePlace() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fecth places");
  }
  return resData.places;
}

export async function fetchUserPlaces() {
    const response = await fetch("http://localhost:3000/user-placess");
    const resData = await response.json();
    if (!response.ok) {
      throw new Error("Failed to fecth user places");
    }
    return resData.places;
  }

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({places}),
    headers: {
        'Content-Type': 'application/json'
    }
  });
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fecth places");
  }
  return resData.message;
}
