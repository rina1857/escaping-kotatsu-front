<template>
  <div class="controle-eject">
    <h1>This is a controle-eject page</h1>
    <div class="container-sm">
      <div class="d-grid gap-2 col-6 mx-auto">
        <input id="set-time" class="form-control-lg" style="text-align: center" type="time" />
        <button
          type="button"
          class="btn btn-primary btn-lg"
          id="eject"
          data-bs-toggle="tooltip"
          title="直ちにこたつを取り出す！"
        >
          <i class="bi bi-eject"></i> 取り出し
        </button>
      </div>
    </div>
  </div>
</template>
