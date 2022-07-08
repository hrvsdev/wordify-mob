export function InputError({ state }) {
    return (
      <p className={`error ${state.state ? "show-error" : null}`}>
        {state.text || "Error"}
      </p>
    );
  }