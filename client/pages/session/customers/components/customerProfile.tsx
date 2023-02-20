

export default function CustomerProfile() {
    return (
        <section className="customer__info">
        <article className="customer__data">
          <address className="customer__location">local</address>
          <img className="customer__photo" alt="Customer photo" />
          <div className="customer__flex">
            <div>
              <h1 className="customer__name">name</h1>
              <h3 className="customer__username">username</h3>
            </div>
            <button className="customer__showInfo">
              <i className="customer__eyeIcon"></i>
            </button>
          </div>
          <p className="customer__email">email</p>
          <p className="customer__telephone">telephone</p>
        </article>
        <button className="customer__add_tag">+ add a tag</button>
        <div className="customer__additional-info">
          <div>
            <div>
              <h5>Account age</h5>
              <h5> day</h5>
            </div>
            <div>
              <h5>Average order value</h5>
              <h5></h5>
            </div>
            <div>
              <h5>Total lifetime spend</h5>
              <h5></h5>
            </div>
          </div>
        </div>
      </section>
    )
  }
  