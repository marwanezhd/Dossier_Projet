<script>
  import {
    Button,
    FormText,
    Input,
    Alert,
    Badge,
    ButtonGroup,
    Card,
    CardTitle,
    CardSubtitle,
    CardText,
    CardBody,
    CardHeader,
    CardFooter,
  } from "sveltestrap";
  import StatusData from "./statusData.svelte";

  export let displayState; // line || mosaique
</script>

{#if displayState == "line"}
  <div class="centered-content">
    <div class="card_1">
      <Card
        theme="light"
        style="width: 80vw; box-shadow: 1vh 2vh 3vh 0vh #0c3c6c85; background-color: transparent;"
      >
        <CardHeader style="background-color: #0c3c6c85; color: white;">
          <CardTitle><h4 class="Alert_title">Demo 1</h4></CardTitle>
        </CardHeader>
        <CardBody>
          <div align="left">
            <Badge color="success"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-circle"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                />
                <path
                  d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"
                />
              </svg></Badge
            >
            <Badge color="danger"
              >problems <Badge color="light"><b>0</b></Badge></Badge
            >
          </div>
          <CardText>
            <StatusData />
          </CardText>
        </CardBody>
      </Card>
    </div>
  </div>
{:else}
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card_1">
          <Card
            theme="light"
            style="width: 80vw; box-shadow: 1vh 2vh 3vh 0vh #0c3c6c85; background-color: transparent;"
          >
            <CardHeader style="background-color: #0c3c6c85; color: white;">
              <CardTitle><h4 class="Alert_title">Demo 1</h4></CardTitle>
            </CardHeader>
            <CardBody>
              <div align="left">
                <Badge color="success"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                    />
                    <path
                      d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"
                    />
                  </svg></Badge
                >
                <Badge color="danger"
                  >problems <Badge color="light"><b>0</b></Badge></Badge
                >
              </div>
              <CardText>
                <StatusData />
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
      <div class="col">
        <div class="card_1">
          <Card
            theme="light"
            style="width: 80vw; box-shadow: 1vh 2vh 3vh 0vh #0c3c6c85; background-color: transparent;"
          >
            <CardHeader style="background-color: #0c3c6c85; color: white;">
              <CardTitle><h4 class="Alert_title">Demo 1</h4></CardTitle>
            </CardHeader>
            <CardBody>
              <div align="left">
                <Badge color="success"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                    />
                    <path
                      d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"
                    />
                  </svg></Badge
                >
                <Badge color="danger"
                  >problems <Badge color="light"><b>0</b></Badge></Badge
                >
              </div>
              <CardText>
                <StatusData />
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
      <div class="col">
        <div class="card_1">
          <Card
            theme="light"
            style="width: 80vw; box-shadow: 1vh 2vh 3vh 0vh #0c3c6c85; background-color: transparent;"
          >
            <CardHeader style="background-color: #0c3c6c85; color: white;">
              <CardTitle><h4 class="Alert_title">Demo 1</h4></CardTitle>
            </CardHeader>
            <CardBody>
              <div align="left">
                <Badge color="success"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                    />
                    <path
                      d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"
                    />
                  </svg></Badge
                >
                <Badge color="danger"
                  >problems <Badge color="light"><b>0</b></Badge></Badge
                >
              </div>
              <CardText>
                <StatusData />
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .centered-content {
    text-align: center;
  }

  .Alert_title {
    text-align: left;
    font-weight: bold;
  }
</style>
