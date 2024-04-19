<script>
    import { Button, FormText, Input, Alert, Badge, ButtonGroup, Card, CardTitle, CardSubtitle, CardText, CardBody, CardHeader, CardFooter } from "sveltestrap";
    import StatusData from "./subComponents/statusData.svelte";
</script>


<h3>Broadcast status</h3>
<main class="box">
    <div class="centered-content">
        <div class="card_1">
          <Card theme="light" style="width: 80vw; box-shadow: 1vh 2vh 3vh 0vh #0c3c6c85; background-color: transparent;">
            <CardHeader style="background-color: #0c3c6c85; color: white;">
              <CardTitle><h4 class="Alert_title">Demo 1</h4></CardTitle>
            </CardHeader>
            <CardBody>
                <div align="left">
                    <Badge color="success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                      </svg></Badge>
                    <Badge color="danger">problems <Badge color="light"><b>0</b></Badge></Badge>
                </div>
              <CardText>
                <StatusData />
              </CardText>
            </CardBody>
          </Card>
        </div>

        <div class="card_2">
            <Card theme="light" style="width: 80vw; box-shadow: 1vh 2vh 3vh 0vh #0c3c6c85; background-color: transparent;">
              <CardHeader style="background-color: #0c3c6c85; color: white;">
                <CardTitle><h4 class="Alert_title">Demo 2</h4></CardTitle>
              </CardHeader>
              <CardBody>
                  <div align="left">
                      <Badge color="success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                          <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                        </svg></Badge>
                      <Badge color="danger">problems <Badge color="light"><b>0</b></Badge></Badge>
                  </div>
                <CardText>
                  <StatusData />
                </CardText>
              </CardBody>
            </Card>
          </div>

          <div class="card_3">
            <Card theme="light" style="width: 80vw; box-shadow: 1vh 2vh 3vh 0vh #0c3c6c85; background-color: transparent;">
              <CardHeader style="background-color: #0c3c6c85; color: white;">
                <CardTitle><h4 class="Alert_title">Demo 3</h4></CardTitle>
              </CardHeader>
              <CardBody>
                  <div align="left">
                      <Badge color="success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                          <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                        </svg></Badge>
                      <Badge color="danger">problems <Badge color="light"><b>0</b></Badge></Badge>
                  </div>
                <CardText>
                  <StatusData />
                </CardText>
              </CardBody>
            </Card>
          </div>
    </div>
</main>

<style>
    :root {
        --t_1: 1.4s;
        --t_2: 2.6s;
        --t_3: 3.4s;
    }
    .card_1 {
        border-radius: 1vh;
        animation: fadeInOut var(--t_1) ease-in-out forwards;
    }
    .card_2 {
        border-radius: 1vh;
        margin-top: 2vh;
        animation: fadeInOut var(--t_2) ease-in-out forwards;
    }
    .card_3 {
        border-radius: 1vh;
        animation: fadeInOut var(--t_3) ease-in-out forwards;
        margin-top: 2vh;
    }

    @keyframes fadeInOut {
        from {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        60% {
            box-shadow: 1vh 0.5vh 0.4vh 0vh #0c3c6c85;
        }
        to {
            box-shadow: 1vh 0.5vh 0.4vh 0vh #0c3c6c85;
            opacity: 1;
        }
    }


    .box {
        margin: 2vh;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    .centered-content {
        text-align: center;
    }

    .Alert_title {
        text-align: left;
        font-weight: bold;
    }

    .btn_confirm {
        margin-top: 4vh;
    }
</style>
