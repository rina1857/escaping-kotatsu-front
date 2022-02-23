<template>
  <div class="controle-backward-forward">
    <h1>This is a controle-backward-forward page</h1>
    <div class="container-sm">
      <div class="d-grid gap-2 col-6 mx-auto">
        <input id="set-time" class="form-control-lg" style="text-align: center" type="time" />
        <button
          type="button"
          class="btn btn-primary btn-lg"
          id="go-forward"
          data-bs-toggle="tooltip"
          title="こたつを前進させる！"
        >
          <i class="bi bi-chevron-up"></i> 前進
        </button>
        <button
          type="button"
          class="btn btn-primary btn-lg"
          id="go-backward"
          data-bs-toggle="tooltip"
          title="こたつを後進させる！"
        >
          <i class="bi bi-chevron-down"></i> 後進
        </button>
      </div>
    </div>
  </div>
</template>
