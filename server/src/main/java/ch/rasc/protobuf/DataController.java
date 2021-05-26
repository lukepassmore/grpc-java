package ch.rasc.protobuf;

import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.google.protobuf.InvalidProtocolBufferException;
import com.google.protobuf.util.JsonFormat;

import ch.rasc.protobuf.EarthquakeOuterClass.Earthquakes;

@RestController
@CrossOrigin
public class DataController {
  private final DataDb DataDb;

  public DataController(DataDb DataDb) {
    this.DataDb = DataDb;
  }

  @GetMapping("/getjsondata")
  public String getEarthquakesJson() throws InvalidProtocolBufferException {
    return JsonFormat.printer().print(this.DataDb.getEarthquakes());
  }

  @GetMapping(path = "/getprotodata", produces = "application/x-protobuf")
  public Earthquakes getEarthquakesProtobuf() {
    return this.DataDb.getEarthquakes();
  }

  @PostMapping(path = "/postdata", produces = "application/x-protobuf")
  public Earthquakes postEarthquakesProtobuf() {
    return this.DataDb.getEarthquakes();
  }

  @PutMapping(path = "/putdata", produces = "application/x-protobuf")
  public Earthquakes putEarthquakesProtobuf() {
    return this.DataDb.getEarthquakes();
  }

  @DeleteMapping(path = "/deletedata", produces = "application/x-protobuf")
  public Earthquakes deleteEarthquakesProtobuf() {
    return this.DataDb.getEarthquakes();
  }

  @PatchMapping(path = "/patchdata", produces = "application/x-protobuf")
  public Earthquakes patchEarthquakesProtobuf() {
    return this.DataDb.getEarthquakes();
  }

  @GetMapping(path = "/refresh")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void refresh() throws IOException {
    this.DataDb.readEarthquakeData();
  }

}