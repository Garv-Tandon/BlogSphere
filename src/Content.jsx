import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

function Content() {
  const handleCreateBlog = () => {
    const author = prompt("Enter your name:");
    const title = prompt("Enter your blog title:");
    const content = prompt("Enter your blog content:");
      localStorage.setItem("blogTitle", title);
  localStorage.setItem("blogContent", content);
  localStorage.setItem("blogDate", new Date().toLocaleDateString());
  localStorage.setItem("blogTime", new Date().toLocaleTimeString());
  localStorage.setItem("blogAuthor", author);

    if (title && content) {
      alert(`Blog Created!\n\nTitle: ${title}\nContent: ${content} \nAuthor: ${author}\nDate: ${new Date().toLocaleDateString()}\nTime: ${new Date().toLocaleTimeString()}`);
    } else {
      alert("Blog creation cancelled.");
    }
  };
  return (
    <main className="container my-5 pt-5">
      {/* Welcome Section */}
      <section className="text-center mb-5">
        <h2 className="display-4 fw-bold text-danger animate__animated animate__fadeInDown">
          Welcome to BlogSphere
        </h2>
        <p className="lead text-muted">
          Unleash your creativity and share your stories with the world!
        </p>
      </section>

      {/* Feature Cards */}
      <section className="row g-4 mb-5">
        <Card icon="🖊️" title="Write Freely" color="primary" text="Express your thoughts and publish your ideas with ease." />
        <Card icon="🌍" title="Global Reach" color="success" text="Connect with readers worldwide instantly." />
        <Card icon="💬" title="Engage Readers" color="warning" text="Comments, likes, shares – everything to build your community." />
      </section>

      {/* Create Blog Section */}
      <section className="text-center bg-light p-5 rounded animate__animated animate__fadeInUp">
        <h3 className="fw-bold mb-3">Ready to Share Your Story?</h3>
        <p className="text-muted mb-4">Start your blogging journey today. It’s quick, easy, and free!</p>
        <button className="btn btn-danger btn-lg shadow-sm" onClick={handleCreateBlog}>
          Create Blog
        </button>
      </section>
    </main>
  );
}

const Card = ({ icon, title, color, text }) => (
  <div className="col-md-4">
    <div className={`card shadow-sm border-0 h-100 text-center animate__animated animate__zoomIn`}>
      <div className="card-body">
        <div className={`display-4 mb-3 text-${color}`}>{icon}</div>
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text text-muted">{text}</p>
      </div>
    </div>
  </div>
);


export default Content;
