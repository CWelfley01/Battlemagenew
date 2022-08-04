


<NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/add-FireElement"
        >
          Add FIRE Element
        </NavLink>
        <NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/add-WaterElement"
        >
          Add WATER Element
        </NavLink>
        <NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/add-AirElement"
        >
          Add AIR Element
        </NavLink>
        <NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/add-EarthElement"
        >
          Add EARTH Element
        </NavLink>


<Route path="/add-FireElement">
            <AddFireElement />
          </Route>
          <Route path="/add-WaterElement">
            <AddWaterElement />
          </Route>
          <Route path="/add-AirElement">
            <AddAirElement />
          </Route>
          <Route path="/add-EarthElement">
            <AddEarthElement />
          </Route>