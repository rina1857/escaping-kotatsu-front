<template>
  <div class="controle">
    <h1>逃げるこたつ操作画面</h1>
    <div class="container-sm">
      <h2><i class="bi bi-alarm"></i> 時間で引っ張る</h2>
      <div class="d-grid gap-2 col-6 mx-auto">
            <input id="set-time" class="form-control-lg" style="text-align: center" type="time" />
            <h2><i class="bi bi-play"></i> すぐに引っ張る</h2>
        <button
          type="button"
          class="btn btn-primary btn-lg"
          id="pull"
          data-bs-toggle="tooltip"
          title="直ちにこたつを引っ張る！"
        >
          <i class="bi bi-box-arrow-down"></i> 引っ張る
        </button>
      </div>
    </div>
  </div>
</template>
